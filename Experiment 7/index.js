const { useState } = React;

function GreetingForm() {
    const [name, setName] = useState('');
    const [greeting, setGreeting] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setGreeting(`Hello, ${name}!`);
    };

    return (
        <div className="bg-white p-6 rounded shadow-md w-80">
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter your name"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Greet
                </button>
            </form>
            {greeting && <p className="mt-4 text-xl text-center">{greeting}</p>}
        </div>
    );
}

ReactDOM.render(<GreetingForm />, document.getElementById('root'));
