import { db } from './db';

export async function getData() {
  try {
    const data = await db.query('SELECT * FROM transaction'); // Name of the tabel here
    console.log(data.rows);
    return data.rows;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}


// export async function saveData(projectName:string) {
//     try {
//       await db.query("INSERT INTO projects(projectname) VALUES ($1)", [projectName])
//       return 'Saved Successfully'
//     } catch (error) {
//       console.log(error);
//       return 'Didnt save'
//     }
//   }
  