import MenuItem from "./MenuItem";

export default function MenuCategory(props) {
  const category = {
    name: "Kimbab 김밥",
    description: "Korean style seaweed rolls",
  };
  const items = [
    {
      name: "Bulgogi Beef Kimbab 불고기 김밥",
      description: "",
      price: "8",
    },
    {
      name: "K Style Kimbab 김밥",
      description: "Vegetable seaweed roll",
      price: "7",
    },
  ];
  return (
    <>
      <h4>{category.name}</h4>
      <p>{category.description}</p>
      {items.map((item) => (
        <>
          <hr />
          <MenuItem item={item} />
        </>
      ))}
    </>
  );
}
