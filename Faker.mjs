import {faker} from "@faker-js/faker";
import fs from 'fs';

let insert ="INSERT INTO compte VALUES";
let x= 500000;
  for(let i=0; i<x; i++) {
    const first_name= faker.name.firstName();
    const last_name= faker.name.lastName();
    const nickname= faker.internet.userName();
    const birthday= faker.date.betweens('2000-02-10','2005-10-20')[0].toISOString().split('T')[0];
    const gender= faker.helpers.arrayElement(["F","M"]);
    const email= faker.internet.email();
    const profile_pic= faker.image.imageUrl();

    insert += 
    `\n('${first_name.replace("'", "''")}','${last_name.replace("'", "''")}','${nickname}','${birthday}','${gender}','${email}','${profile_pic}')`;
    i+1< x ? insert+=",":insert+=";";
  };

fs.writeFile('compte.sql', insert, (err)=> {
  if(err){
    console.log(err);
  }
});