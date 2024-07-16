export function Todos({ todos }) {
    return (
        <div>
            <h1>Todos</h1>
            {
                todos.map(function (todo, id) {
                    return (
                        <div key={id}>
                            <h2>{todo.title}</h2>
                            <p>{todo.description}</p>
                            <button>{todo.completed == true ? "Completed" : "Mark as completed"}</button>
                        </div>
                    )
                })
            }
        </div>
    )
}
