import React, { useState, useEffect } from 'react'
import Gun from 'gun'

type IDataType = Record<string, {
	number: number,
}>;

type IUnpackedPromise<T> = T extends Promise<infer U> ? U : never;

type IChainReference = IUnpackedPromise<ReturnType<typeof getGun>>;

async function getGun()
{
	let peers = [
		'http://localhost:3000/gun',
		"https://gunjs.herokuapp.com/gun",
		"http://nmr.io:8765/gun",
	];

	if (typeof window !== 'undefined')
	{
		let url = window.location.origin + '/gun';
		if (!peers.includes(url))
		{
			peers.unshift(url);
		}
	}

	if (typeof window === 'undefined')
	{
		let G: typeof Gun = await import('gun').then(m => m.default || (m as typeof m).default);

		return new G<IDataType>(peers)
	}
	else
	{
		let G: typeof Gun = await import('gun/gun').then(m => m.default || (m as typeof m).default);

		return new G<IDataType>(peers)
	}
}

export default function ()
{
	let [board, setBoard] = useState('board');
	let [number, setNumber] = useState(0);
	let [gun, setGun] = useState(null as IChainReference);

	useEffect(() =>
	{

		async function initGun()
		{
			if (!gun)
			{
				// @ts-ignore
				setGun(gun = await getGun())
			}

			// @ts-ignore
			gun.get<string>(board)
				.on(state =>
				{
					if (state !== undefined)
					{
						setNumber(state.number)
					}
				}, true);
		}

		initGun();

	}, []);

	const addOne = () =>
	{
		setNumber((number) => {
			const newNumber = number + 1

			// @ts-ignore
			gun.get(board)
				.put({ number: newNumber })
			;

			return newNumber
		})
	};

	const subtractOne = () =>
	{
		setNumber((number) => {
			const newNumber = number - 1

			// @ts-ignore
			gun.get(board)
				.put({ number: newNumber })
			;

			return newNumber
		})
	};

	return <div>
		<h2>{number}</h2>
		<button onClick={subtractOne}>Subtract 1</button>
		<button onClick={addOne}>Add 1</button>
	</div>;
}

