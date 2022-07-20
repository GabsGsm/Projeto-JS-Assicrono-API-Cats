const BASE_URL = "https://api.thecatapi.com/v1/images/search?size=full/";
const bttnChange = document.querySelector("#botaoChange");
const catImg = document.querySelector("#catImagem");

const getCats = async () => {
    try {
        const data = await fetch(BASE_URL)
        const json = await data.json();
        return json[0].url;
    } catch (error) {
        console.log(error.message);
    }
};
const loadImg = async () => {
    catImg.src = await getCats();
};
bttnChange.addEventListener("click", ()=>{
    loadImg();
});
loadImg();