export interface shoppingitems {
  id: number;
  itemName: string;
  quantity: number;
  isSelected: boolean;
}

export const shopData = [
  {
    id: 1,
    itemName: "item 1",
    quantity: 1,
    isSelected: false,
  },
  {
    id: 2,
    itemName: "item 2",
    quantity: 2,
    isSelected: true,
  },
  {
    id: 3,
    itemName: "item 3",
    quantity: 3,
    isSelected: false,
  },
];
