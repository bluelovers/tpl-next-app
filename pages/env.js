export default () => (
	<div className="hello">
		<div>
			process.env.SECRET: <strong>{process.env.SECRET}</strong>
		</div>
		<div>process.env.TEST_VAR: {process.env.TEST_VAR}</div>
		<style jsx>{`
      .hello {
        font: 15px Helvetica, Arial, sans-serif;
        background: #eee;
        padding: 100px;
        text-align: center;
        transition: 100ms ease-in background;
      }
      .hello:hover {
        background: #ccc;
      }
    `}</style>
	</div>
)
