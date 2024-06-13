//property

// String length:-

// let data ='javascript learning';
// console.log(data.length);
// console.log(data[9]);


// String split():-

// let data ='javascript learning';
// console.log(data.split()); 
// console.log(data.split('')); 
// console.log(data.split(' ')); 


// String toUpperCase():-

// let data ='javascript learning';
// console.log(data.toUpperCase());


//  String toLowerCase():-

// let data ='javascript learning';
// console.log(data.toLowerCase());


//String trim():-

// let data = '        javascript learning       ';
// console.log(data.length);
// console.log(data.trim());
// console.log(data.trim().length);


//String trimEnd():-

// let data = '      javascript learning      ';
// console.log(data.length);
// console.log(data.trimEnd());
// console.log(data.trimEnd().length);


//String trimStart():-

// let data = '    javascript learning   ';
// console.log(data.length);
// console.log(data.trimStart());
// console.log(data.trimStart().length);


//String padStart():-

// let data = '97644';
// console.log(data.padStart(10,'x'));


//String padEnd():-

// let data = '97644';
// console.log(data.padEnd(10,'x'));


// String Slice():-

// slice method (start,end);

// let data= 'JavaScript is the Programming Language for the Web. JavaScript can update and change both HTML and CSS.';
// let str = data.slice(4,20);
// let str = data.slice(4);
// let str = data.slice(-34,-20);
// console.log(str);
// console.log(data);


// String substring():-

//Substring method (start,end);

// let data= 'JavaScript is the Programming Language for the Web. JavaScript can update and change both HTML and CSS.';
// let str = data.substring(4,20);
// let str = data.substring(4);
// let str = data.substring(-34);
// console.log(str);


// String substr():-

//Substr method (start,length);

// let data= 'JavaScript is the Programming Language for the Web. JavaScript can update and change both HTML and CSS.';
// let str = data.substr(4,20);
// let str = data.substr(4);
// let str = data.substr(-34,10);
// console.log(str);


// concat:-

// let data= 'JavaScript is the Programming Language for the Web. JavaScript can update and change both HTML and CSS.';
// let skill = 'Hello SkillQude, ';
// console.log(skill.concat(data,'\n\nhello'));


// charAt:-

// let data= 'JavaScript is the Programming Language for the Web. JavaScript can update and change both HTML and CSS.';
// console.log(data.charAt(4));
// console.log(data.charCodeAt(4));


// replace:-

let data= 'JavaScript is the Programming Language for the Web. JavaScript can update and change both HTML and CSS.';
data = data.replace('JavaScript','C Language');
// data = data.replace(/JavaScript/g,'c Language');
console.log(data);



// replaceAll:-

// let data= 'JavaScript is the Programming Language for the Web. JavaScript can update and change both HTML and CSS.';
// data = data.replaceAll('JavaScript','c Language');
// console.log(data);