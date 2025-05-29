import DrawerItem from "./drawer.item";

type TProps = {
  pages: { id: string; label: string }[];
  activeItem: string;
  setActiveItem: (item: string) => void;
};

export default function Drawer({ activeItem, setActiveItem, pages }: TProps) {
  return (
    <div className="py-4 w-[180px]  flex-col gap-2 hidden md:flex">
      {pages.map((item) => (
        <DrawerItem
          isActive={activeItem === item.id}
          key={item.id}
          label={item.label}
          onClick={() => setActiveItem(item.id)}
        />
      ))}
    </div>
  );
}
