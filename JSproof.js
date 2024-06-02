/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

const nftHolder=[];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.

function mintNFT (Id,_name,acc_no,age,country) {

    //NFT object with its metadata
    const nftInfo={
        "nftId": Id,
        "name": _name,
        "acc_no":acc_no,
        "age": age,
        "country": country
    };
    //push the nft object to nftHolder
    nftHolder.push(nftInfo);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()

function listNFTs () {
    for(let i=0;i<nftHolder.length;i++){
        console.log("\nNFT no:  ",i+1);
        console.log("ID:\t\t ",nftHolder[i].nftId);
        console.log("Name:\t ",nftHolder[i].name);
        console.log("Acc_no:  ",nftHolder[i].acc_no);
        console.log("Age:\t ",nftHolder[i].age);
        console.log("Country: ",nftHolder[i].country);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nTotal number of NFTs: ",nftHolder.length);
}

// call your functions below this line

//minting nfts
mintNFT(121,"Lalit",1222001,2,"India");
mintNFT(134,"Chirag",1222010,4,"Bangladesh");
mintNFT(123,"Ayush",1222002,2.5,"India");
mintNFT(126,"Rudra",1222011,1,"Mexico");
mintNFT(144,"Rahul",1222111,6,"Germany");

//listing nfts
listNFTs();

//calling getTotalSupply() function
getTotalSupply();


