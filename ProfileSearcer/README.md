Summary:
Create a web app that will query GitHub API to fetch user details based on username and show the details. The web app will look something like this. 
 
Please follow the below information:
1. Create a folder, "Interview Challenge" in the Sandbox shared with us and create all your required files inside the folder. 
2. 	Github API to query details: `https://api.github.com/users/${username}`
3. 	Card should be created dynamically based on details fetched by API.
4. 	For responsive behaviour check the attached screen recording.
5. 	GitHub card should list these details:
a. 	Name
b. 	Avatar
c.  	Bio
d. 	Followers and Following count
e. 	Repo count
f.  	Twitter username
g. 	Location
6. 	Your JavaScript will have these two methods defined inside a class called GitHub
a. 	getUserDetails: It will make an API call to get data and internally it will call another method `createUserCard` with fetched data to create the card.
b. 	createUserCard: Based on the data it will create a Profile card.
7. 	When the web app loads, initialize the card with your Profile details by triggering the above `getUserDetails` method.
8. Feel free to use either Bootstrap or custom CSS
# github-account-searcher
