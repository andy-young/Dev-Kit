/*
You have a fashion catalog, an inventory of items from various high-fashion designers. 
Each designer has a lineup of shoes. Each shoe has a name and a price.

It looks like this:
var currentInventory = [ { name: 'Brunello Cucinelli', shoes: [ {name: 'tasselled black low-top lace-up', price: 1000}, {name: 'tasselled green low-top lace-up', price: 1100}, {name: 'plain beige suede moccasin', price: 950}, {name: 'plain olive suede moccasin', price: 1050} ] }, { name: 'Gucci', shoes: [ {name: 'red leather laced sneakers', price: 800}, {name: 'black leather laced sneakers', price: 900} ] } ]; 
Look up all the shoes across all the designers and list them out in a flat list:{designer name} - {shoe name} - {price}{designer name} - {shoe name} - {price}
E.g.,
Brunello Cucinelli, tasselled black low-top lace-up, 1000
Brunello Cucinelli, tasselled green low-top lace-up, 1100
*/


function renderInventory(arr) {
  let result = [];
  for (let i in arr) {
    if (i === arr.length - 1) {
      result.push(`${arr[i].name},${arr[i].shoes[i].name}, ${arr[i].shoes[i].price}\n`);
    } else
      result.push(`${arr[i].name}, ${arr[i].shoes[i].name}, ${arr[i].shoes[i].price}`);
  }
  return result.join('\n');
}

// Brunello Cucinelli, tasselled black low-top lace-up, 1000
// Brunello Cucinelli, tasselled green low-top lace-up, 1100
renderInventory(currentInventory);
