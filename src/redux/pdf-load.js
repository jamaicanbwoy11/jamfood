import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const path = require('path');

const getBase64ImageFromURL = (url) => {
  return new Promise((resolve, reject) => {
    var img = new Image();
    img.setAttribute("crossOrigin", "anonymous");

    img.onload = () => {
      var canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;

      var ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);

      var dataURL = canvas.toDataURL("image/png");

      resolve(dataURL);
    };

    img.onerror = error => {
      reject(error);
    };

    img.src = url;
  });
}


export const pdfProcessing = async (recipe) =>{
    let image = '';
    getBase64ImageFromURL(recipe.src).then(value => {
      image = {image: value, width: 250,}
    }).catch(err => {
      alert('Error adding image - Pdf will not contain recipe image!')
    });

  const ingredients =  recipe.ingredients.map((item) => {
    return ({ text: item, listType: 'none' });
  });

  const direction = [];
  recipe.directions.forEach((item,i) => {
    direction.push({text:`Step ${i+1}`,style: 'steps'})
    direction.push({text:item,style: 'context'})
  });

  const note = (recipe.notes)? [{text:'**Note', style: 'steps'},{text: recipe.notes,style: 'context'}] : {};

  let pdfDefination = {
    footer:function(currentPage, pageCount) {
      return [
        {
          columns:[
            {text:'nhope © 2021',alignment: 'center' },
            {text: `${currentPage}/${pageCount}`, style: 'pagecount'},
          ]

        }
      ]
    },
  header: function(currentPage, pageCount, pageSize) {
    // you can apply any logic and return any valid pdfmake element
    return [
      { text: 'More Recipes',link: 'https://nhope123.github.io/creole_food/', style: 'headerLink' },
    ]
  },
    content:[
      {text: `${recipe.title} Recipe`, style: 'header'},
      {text: 'Ingredients', style: 'subTitle'},
      {text: recipe.servingSize, margin: [0,3] },
      {
        columns: [
          {
            ul: [...ingredients],
          },
          image,
        ]
      },
      {text: 'Directions', style: 'subTitle'},
      direction,
      note,
    ],
    styles:{
      header:{
        fontSize: 20,
        bold: true,
        alignment: 'center',
      },
      subTitle:{
        fontSize: 14,
        bold: true,
        alignment: 'left',
        margin: [0,5,0,0]

      },
      steps:{
        bold: true,
        margin: [0,3],
      },
      context:{
        margin:[10,0,0,0],
      },
      pagecount:{
        alignment: 'right',
        margin: [0,0,20,10],
      },
      headerLink:{
        alignment: 'right',
        margin: [0,10,10,0],
        fontSize: 9,
        italics: true,
      },
    }
  }

  // need Promise
  return pdfMake.createPdf(pdfDefination).download(`${recipe.title}_recipe.pdf`) ;
}
