// 1.
export default function Tabs({ children, buttons, ButtonsContainer = 'menu' }) {
  // const ButtonsContainer = buttonsContainer;
  return (
    <>
      {/* 2. */}
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  )
}
