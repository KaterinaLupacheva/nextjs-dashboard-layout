import { SidebarContainer } from "./Sidebar.styled";

type SidebarProps = {
  isOpened: boolean;
};
export default function Sidebar({ isOpened }: SidebarProps) {
  return (
    <SidebarContainer isOpened={isOpened}>
      <span>Menu</span>
    </SidebarContainer>
  );
}
