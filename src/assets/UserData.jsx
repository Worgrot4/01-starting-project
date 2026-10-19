    function UserData() {
    let user = {
    first: "Israel",
    last: "Velazquez Rugama",
    age: 20,
    };
    return (
    <div>
        <ul>
            User Data
            <Li>
                First: {user.first}
            </Li>

            <Li>
                Last: {user.last}
            </Li>

            <Li>
                Age: {user.age}
            </Li>
        </ul>
    </div>
    );
    }