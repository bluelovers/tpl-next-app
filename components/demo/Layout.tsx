export default function Layout({ children })
{
	return (
		<>
			{children}
			<style jsx global>{`
        body {}
      `}</style>
		</>
	)
}
