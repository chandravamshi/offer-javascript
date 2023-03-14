//import axios from "axios";

//import { axios } from 'axios';
//import { parse } from "node-html-parser";
//import { parse } from "node-html-parser";
/** 
let template;
const data = { id: 7 };
const getOfferTemplate = () => {
  axios
    .get("http://localhost:5001/offers/find-template", { params: data })
    .then((res) => {
      template = res.data.data.body;
    });
};**/
const urlParams = new URLSearchParams(window.location.search);
const uid = urlParams.get("uid");
let template;
let templateData;
const data = { uid: uid };

const element = document.getElementById("getOffer");
element.addEventListener("click", () => {
  getOfferTemplate();
  /*fetch(
    "http://localhost:5001/offers/find-template?" +
      new URLSearchParams({
        id: 7,
      })
  )
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      template = data.data.body;
      //console.log(template)
    })
    .catch((error) => {
      console.error("Error:", error);
    });*/
});

const getOfferTemplate = () => {
  axios
    .get("http://localhost:5001/offers/find-template-and-data-by-uid", {
      params: data,
    })
    .then((res) => {
      template = res.data.template;
      templateData = res.data.data;
      writeNewDoc();
    })
    .catch((error) => {
      alert(error.response.data.message + " for uid " + data.uid);
    });
};

/*function getTemplateData() {
  axios
    .get("http://localhost:5001/offers/get-template-data", {
      params: data,
    })
    .then((res) => {
      templateData = res.data.data;
      writeNewDoc();
    });
}*/

function writeNewDoc() {
  if (template && templateData) {
    document.write(template);

    document.addEventListener("DOMContentLoaded", () => {
      const allPTags = document.getElementsByTagName("p");
      const bTag = allPTags.item(0).getElementsByTagName("b")[0];
      bTag.innerHTML = templateData[2].value;
      const roomType = document.getElementById("zimmertyp");
      roomType.innerHTML = templateData[7].value;
      const grafts = document.getElementById("grafts");
      grafts.innerHTML = templateData[3].value;
    });
    document.close();
  }

  //patient-name-2

  /**const htmltemp = parse(template);
    const elem = htmltemp.getElementsByTagName("head");
    //console.log(elem)
    const metaTag = htmltemp.getElementsByTagName("meta");

    //const scriptTag = htmltemp.getElementsByTagName('script')
    console.log(metaTag);*/
  //document.write('<script src="src/assets/js/web.js" ></script>');

  //document.close();
}
