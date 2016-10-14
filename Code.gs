function onOpen() {
  var ui = FormApp.getUi();
  var menu = ui.createAddonMenu()
    .addItem("Blank", "openBlank")
    .addItem("Blank Dialogue", "openBlankDialogue")
    .addItem("SideNav", "openSideNav")
    .addItem("FAQ", "openFAQ")
    .addItem("Container", "openContainer")
    .addItem("Cols & Rows", "openColsAndRows")
    .addItem("Form", "openForm")
    .addItem("Collapsible", "openCollapsible")
    .addItem("Tooltip", "openTooltip")
    .addItem("!!Materializecss", "openMaterializecss")

  .addToUi();
}


function openBlank(){
  var ui = FormApp.getUi();
  var html = HtmlService.createHtmlOutputFromFile('blank.html');
  html.setSandboxMode(HtmlService.SandboxMode.IFRAME);
  html.setTitle("Blank"); 
  ui.showSidebar(html);
}

function openBlankDialogue(){
  var ui = FormApp.getUi();
  var html = HtmlService.createHtmlOutputFromFile('blank_dialogue.html');
  html.setSandboxMode(HtmlService.SandboxMode.IFRAME);
  html.setHeight(400).setWidth(600);
  ui.showModalDialog(html, "Blank Dialogue");
}


function openSideNav(){
  var ui = FormApp.getUi();
  var html = HtmlService.createHtmlOutputFromFile('sideNav.html');
  html.setSandboxMode(HtmlService.SandboxMode.IFRAME);
  html.setTitle("Choice Eliminator 2"); 
  ui.showSidebar(html);
}


function openFAQ(){
  var ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1huQR5EJHojT_CP1QahfrU58LHp-fCp0TtgJUF8qmEfg/edit#gid=0");
  var sheets = ss.getSheets();
  var data = [];
  for (i in sheets){
   var c = sheets[i];
   var name = c.getName();
   var cData = c.getDataRange().getValues();
    data.push([name,cData]);
  }
  data = JSON.stringify(data);
  
  var ui = FormApp.getUi();
  var html = HtmlService.createTemplateFromFile('FAQ.html');
  html.data = data;
  html = html.evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME)  
  .setWidth(600)
  .setHeight(500);
  ui.showModalDialog(html, "FAQ");
}

function openContainer(){
  var ui = FormApp.getUi();
  var html = HtmlService.createHtmlOutputFromFile('container.html');
  html.setSandboxMode(HtmlService.SandboxMode.IFRAME);
  html.setHeight(400).setWidth(600);
  ui.showModalDialog(html, "Container");
}

function openColsAndRows(){
  var ui = FormApp.getUi();
  var html = HtmlService.createHtmlOutputFromFile('rowsandcols.html');
  html.setSandboxMode(HtmlService.SandboxMode.IFRAME);
  html.setHeight(400).setWidth(600);
  ui.showModalDialog(html, "Rows & Columns");
}

function openForm(){
  var ui = FormApp.getUi();
  var html = HtmlService.createHtmlOutputFromFile('form.html');
  html.setSandboxMode(HtmlService.SandboxMode.IFRAME);
  html.setHeight(400).setWidth(600);
  ui.showModalDialog(html, "Form");
}

function openForm(){
  var ui = FormApp.getUi();
  var html = HtmlService.createHtmlOutputFromFile('form.html');
  html.setSandboxMode(HtmlService.SandboxMode.IFRAME);
  html.setHeight(400).setWidth(600);
  ui.showModalDialog(html, "Form");
}

function openCollapsible(){
  var ui = FormApp.getUi();
  var html = HtmlService.createHtmlOutputFromFile('collapsible.html');
  html.setSandboxMode(HtmlService.SandboxMode.IFRAME);
  html.setHeight(400).setWidth(600);
  ui.showModalDialog(html, "Collapsible");
}

function openTooltip(){
  var ui = FormApp.getUi();
  var html = HtmlService.createHtmlOutputFromFile('tooltip.html');
  html.setSandboxMode(HtmlService.SandboxMode.IFRAME);
  html.setHeight(400).setWidth(600);
  ui.showModalDialog(html, "Tooltip");
}



function openMaterializecss(){
  var ui = FormApp.getUi();
  var html = HtmlService.createHtmlOutputFromFile('materializecss.html');
  html.setSandboxMode(HtmlService.SandboxMode.IFRAME);
  html.setTitle("Choice Eliminator 2"); 
  ui.showSidebar(html);
}

