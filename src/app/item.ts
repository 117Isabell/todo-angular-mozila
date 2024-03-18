//  The Item interface creates an item object model so that your application will understand what an item is.
//For this to-do list, an item is an object that has a description and can be done.
export interface Item {
  description: string;
  done: boolean;
}
