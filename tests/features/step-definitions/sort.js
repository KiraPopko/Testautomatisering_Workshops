
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';



/*Then('sub categories should be sorted by alphabetically', function () {
  //this.json.children.sort((a, b) => a.url.localeCompare(b.url));
// Check if children exist and sort them alphabetically
if (this.json?.children && Array.isArray(this.json.children)) {
  this.json.children.sort((a, b) => a.url.localeCompare(b.url));

  // Sort subcategories alphabetically for each child
  this.json.children.forEach(category => {
      if (category.subcategories && Array.isArray(category.subcategories)) {
          category.subcategories.sort((a, b) => a.url.localeCompare(b.url));
          
          // Log the sorted subcategories for this category
          //console.log(`Subcategories for category "${category.url}" are sorted:`);
          console.log(category.subcategories.map(sub => sub.url));
      }
  });
}
console.log('this.json structure:', this.json);


});*/

Then('sub categories should be sorted by alphabetically', function () {
  // Check if 'children' exists and sort them alphabetically
  if (this.json?.children && Array.isArray(this.json.children)) {
    // Sort the main categories alphabetically by their 'url'
    this.json.children.sort((a, b) => a.url.localeCompare(b.url));

    // Now check each category's 'subcategories'
    this.json.children.forEach(category => {
      if (category.children && Array.isArray(category.children)) {
        // Iterate through each child and check if it has subcategories
        category.children.forEach(subCategory => {
          if (subCategory.children && Array.isArray(subCategory.children)) {
            // Sort the subcategories alphabetically by their 'url'
            subCategory.children.sort((a, b) => a.url.localeCompare(b.url));

            // Log the sorted subcategories for this category
            console.log(`Subcategories for category "${subCategory.url}" are sorted:`);
            console.log(subCategory.children.map(sub => sub.url));
          }
        });
      }
    });
  }

});










    

  
    
  

