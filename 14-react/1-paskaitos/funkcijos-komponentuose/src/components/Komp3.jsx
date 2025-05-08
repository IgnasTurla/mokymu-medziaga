import {averageArray} from '../utils/calculator'

const Komp3 = () => {
  let studentai = [
    {id: 1, name: 'Jonas', grades: [4, 8, 5, 9]},
    {id: 2, name: 'Petras', grades: [2, 2, 3, 2]},
    {id: 3, name: 'Antanas', grades: [4, 2, 5, 8]},
    {id: 4, name: 'Mindaugas', grades: [2, 8, 5, 5]}
  ]
  let minimumGradeValue = 4.5;

    return (
        <div>
           <h1>Studentai</h1>
           <table border="1">
            <thead>
                <th>id</th>
                <th>name</th>
                <th>grades avg</th>
                <th>is good?</th>
                
            </thead>
            <tbody>
                {
                    studentai.map(studentas => {
                        return <tr key={studentas.id}>
                            <td>{studentas.id}</td>
                            <td>{studentas.name}</td>
                            <td>{averageArray(studentas.grades)}</td>
                            <td>{averageArray(studentas.grades) >= minimumGradeValue ? 'taip' : 'ne'  }</td>
                        </tr>
                    })
                }
            </tbody>
           </table>
        </div>
    );
};

export default Komp3;
