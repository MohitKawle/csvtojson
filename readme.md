node application to read and write to csv files  in local meachine
to run the application node is required 

after downloding node and npm ,go to the folder right click on index.js select the option open in intigrated terminal

run "npm i"
add the path name of both  files


endpoints to get data
path: "/" method :"get" 
output will be in an arr  
sample output   :[{"PARAMETER":"Temperature","SET_POINT":"35","DATE":"18/01/2023","TIME":"15:00:00"},{"PARAMETER":"Temperature","SET_POINT":"40","DATE":"18/01/2023","TIME":"15:30:00"},{"PARAMETER":"Temperature","SET_POINT":"42","DATE":"18/01/2023","TIME":"16:00:00"},{"PARAMETER":"Temperature","SET_POINT":"44","DATE":"18/01/2023","TIME":"16:30:00"}]

endpoints to post data 
path: "/" method :"post" 
input: {}
output :"updated succesfully"