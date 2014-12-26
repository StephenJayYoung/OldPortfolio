var myPDF = new PDFObject({ url: "sample.pdf" }).embed();

var variablename = new PDFObject({ url: "Stephen_Young_Resume.pdf" }).embed("targetElementID");

if(myPDF){
  //do something
}