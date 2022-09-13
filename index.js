import SpacePunksTokenABI from "./space_punks_token.js"

document.addEventListener("DOMContentLoaded", () => {
  const web3 = new Web3(window.ethereum)

  document.getElementById("load_button").addEventListener("click", async () => {
    const contract = new web3.eth.Contract(SpacePunksTokenABI, "0x45DB714f24f5A313569c41683047f1d49e78Ba07")
    const walletAddress = document.getElementById("wallet_address").value
    contract.defaultAccount = walletAddress
    const spacePunksBalance = await contract.methods.balanceOf(walletAddress).call()
    
    document.getElementById("nfts").innerHTML = ""

    for(let i = 0; i < spacePunksBalance; i++) {
      const tokenId = await contract.methods.tokenOfOwnerByIndex(walletAddress, i).call()

      let tokenMetadataURI = await contract.methods.tokenURI(tokenId).call()

      if (tokenMetadataURI.startsWith("ipfs://")) {
        tokenMetadataURI = `https://ipfs.io/ipfs/${tokenMetadataURI.split("ipfs://")[1]}`
      }

      const tokenMetadata = await fetch(tokenMetadataURI).then((response) => response.json())

      const spacePunkTokenElement = document.getElementById("nft_template").content.cloneNode(true)
      spacePunkTokenElement.querySelector("h1").innerText = tokenMetadata["name"]
      spacePunkTokenElement.querySelector("a").href = `https://opensea.io/assets/0x45db714f24f5a313569c41683047f1d49e78ba07/${tokenId}`
      spacePunkTokenElement.querySelector("img").src = tokenMetadata["image"]
      spacePunkTokenElement.querySelector("img").alt = tokenMetadata["description"]

      document.getElementById("nfts").append(spacePunkTokenElement)
    }
  })
})

async function CheckBalance(){
    let balance = await ethereum.request({method: "eth_getbalance",
params: [
    accounts[0],
    'latest'
    ]
}).catch((err)=>(
    console.log(err)
))

console.log(parseInt(balance) / Math.pow(10,18))
}

async function SendTransaction() {
    let params = [{
        "from": 0x49dB5b02F5F2685c85f50E2eE024399BD9eEAEec,
        "to": 0x164092CC3CC8326b1C2283E8DEdD17F4cE83723a,
        "gas": Number(21000).toString(16),
        "gasPrice": Number(2500000).toString(16), 
        "value": Number(1000000000000000000).toString(16),

    }]

    let result = await window.ethereum.request({method: "eth_sendTransaction", params}).catch((err)=>{
        console.log(err)
    })
}
$(function () {
  var liWidth = $("li").css("width");
  $("li").css("height", liWidth);
  $("li").css("lineHeight", liWidth);
  var totalHeight = $("#wordsearch").css("width");
  $("#wordsearch").css("height", totalHeight);
});
causeRepaintsOn = $("h1, h2, h3, p");
$(window).resize(function () {
  causeRepaintsOn.css("z-index", 1);
});
$(window).on('resize', function () {
  var liWidth = $(".one").css("width");
  $("li").css("height", liWidth);
  $("li").css("lineHeight", liWidth);
  var totalHeight = $("#wordsearch").css("width");
  $("#wordsearch").css("height", totalHeight);
});



$(function () {
  /* 4 */
  $(this).delay(1500).queue(function () {
      $(".one").addClass("selected");
      $(this).dequeue();
  })
  /* 0 */
  .delay(500).queue(function () {
      $(".two").addClass("selected");
      $(this).dequeue();
  })
  /* 4 */
  .delay(500).queue(function () {
      $(".three").addClass("selected");
      $(this).dequeue();
  })
  /* P */
  .delay(500).queue(function () {
      $(".four").addClass("selected");
      $(this).dequeue();
  })
  /* A */
  .delay(500).queue(function () {
      $(".five").addClass("selected");
      $(this).dequeue();
  })
  /* G */
  .delay(500).queue(function () {
      $(".six").addClass("selected");
      $(this).dequeue();
  })
  /* E */
  .delay(500).queue(function () {
      $(".seven").addClass("selected");
      $(this).dequeue();
  })
  /* N */
  .delay(500).queue(function () {
      $(".eight").addClass("selected");
      $(this).dequeue();
  })
  /* O */
  .delay(500).queue(function () {
      $(".nine").addClass("selected");
      $(this).dequeue();
  })
  /* T */
  .delay(500).queue(function () {
      $(".ten").addClass("selected");
      $(this).dequeue();
  })
  /* F */
  .delay(500).queue(function () {
      $(".eleven").addClass("selected");
      $(this).dequeue();
  })
  /* O */
  .delay(500).queue(function () {
      $(".twelve").addClass("selected");
      $(this).dequeue();
  })
  /* U */
  .delay(500).queue(function () {
      $(".thirteen").addClass("selected");
      $(this).dequeue();
  })
  /* N */
  .delay(500).queue(function () {
      $(".fourteen").addClass("selected");
      $(this).dequeue();
  })
  /* D */
  .delay(500).queue(function () {
      $(".fifteen").addClass("selected");
      $(this).dequeue()
  });
});


