const stdIDContainer = document.getElementById('stdID');
    const showGrade = (arr) =>{
        const result = [];
        const header = []
        header.push(`
        <thead>
            <tr>
                <th scope="col">Student ID</th>
                <th scope="col">Q1</th>
                <th scope="col">Q2</th>
                <th scope="col">Q3</th>
                <th scope="col">Q4</th>
                <th scope="col">Average</th>
            </tr>
        </thead>
        `)
        arr.filter((grade) => {
            let newGrade = {
                Average: (grade.Q1 + grade.Q2 + grade.Q3 + grade.Q4) / 4
              }
              result.push(
                `<tbody>
                    <tr>
                        <td class="table-light col-md-2">${grade.studentId}</td>
                        <td class="table-light col-md-2">${grade.Q1}</td>
                        <td class="table-light col-md-2">${grade.Q2}</td>
                        <td class="table-light col-md-2">${grade.Q3}</td>
                        <td class="table-light col-md-2">${grade.Q4}</td>
                        <td class="table-light col-md-2">${newGrade.Average}</td>
                    </tr>
                </tbody>`
            )
            stdIDContainer.innerHTML = header.join('') +  result.join('')
        })
       return 
    }
    
    const studentGrades = [
        {
            studentId: 1,
            Q1: 89.3,
            Q2: 91.2,
            Q3: 93.3,
            Q4: 89.8
        },
    
        {
            studentId: 2,
            Q1: 69.2,
            Q2: 71.8,
            Q3: 76.5,
            Q4: 81.9
        },
    
        {
            studentId: 3,
            Q1: 95.7,
            Q2: 91.4,
            Q3: 90.7,
            Q4: 85.6
        },
    
        {
            studentId: 4,
            Q1: 86.9,
            Q2: 74.5,
            Q3: 83.3,
            Q4: 86.1
        },
    
        {
            studentId: 5,
            Q1: 70.9,
            Q2: 73.8,
            Q3: 80.1,
            Q4: 81.8
        },
    
    ];
    
    showGrade(studentGrades);
    
