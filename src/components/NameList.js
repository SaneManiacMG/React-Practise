import React from "react";
import Person from "./Person";

function NameList() {
	// const names = ["John", "Paul", "Mary", "Anna", "Peter"];

	const persons = [
		{
			id: 1,
			name: "John",
			age: 30,
			skill: "React",
		},
		{
			id: 2,
			name: "Paul",
			age: 40,
			skill: "Angular",
		},
		{
			id: 3,
			name: "Mary",
			age: 50,
			skill: "Vue",
		},
	];

	// const namesList = names.map((name, index) => <h2 key={index}>{name}</h2>);

	const personList = persons.map((person) => (
		<Person key={person.id} person={person} />
	));

	// return <>{namesList}</>;

	return <>{personList}</>;
}

export default NameList;
