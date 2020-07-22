function convertt(){
    n = randomm()
    if(n===1)
    {
    n = "Rock"
     }
     else if(n===2){
         n = "Paper"
     }
     else{
         n = "Scissor"
     }
     return n
 }
 function randomm(){
     n = Math.floor(Math.random() * 3); 
     return n+1; 
 }

x=0
data = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]] 

while(x<50){
    players = []
 for(i=0;i<4;i++){
 players.push(convertt())
 }
  console.log(`${x+1}st iteration`); 
 for(i=0;i<4;i++){
     for(j=0;j<4;j++)
     {
        if( (players[i]==="Paper" && players[j] === "Rock") || (players[i]==="Rock" && players[j] === "Scissor") ||
         (players[i]==="Scissor" && players[j] === "Paper") )
         {
          data[i][j] = data[i][j]+ 1;
         }  
        
     }
 }
 
 console.log("-----------------------------------------------------------------------");
 console.log(`|         |   Player 1   |   Player 2   |   Player 3   |   Player 4   |`);
 console.log("---------------------------------------------------------------------");
 console.log(`|Player 1 |     ${players[0]}    |   ${players[1]}    |     ${players[2]}    |    ${players[3]}   |`);
 console.log("---------------------------------------------------------------------");
 
 console.log("\n\n");
 
 console.log("-----------------------------------------------------------------------");
 console.log(`|         |   Player 1   |   Player 2   |   Player 3   |   Player 4   |`);
 console.log("-----------------------------------------------------------------------");
 console.log(`|Player 1 |      -       |       ${data[0][1]}      |       ${data[0][2]}      |       ${data[0][3]}      |`);
 console.log("-----------------------------------------------------------------------");
 console.log(`|Player 2 |       ${data[1][0]}      |       -      |       ${data[1][2]}      |       ${data[1][3]}      |`);
 console.log("-----------------------------------------------------------------------");
 console.log(`|Player 3 |       ${data[2][0]}      |       ${data[2][1]}      |       -      |       ${data[2][3]}      |`);
 console.log("-----------------------------------------------------------------------");
 console.log(`|Player 4 |       ${data[3][0]}      |       ${data[3][1]}      |       ${data[3][2]}      |       -      |`);
 console.log("-----------------------------------------------------------------------");

    x +=1;
    console.log("\n\n\n\n");
}


