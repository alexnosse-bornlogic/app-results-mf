import { Column, Container, Grid, Logo, spacing } from "@bornlogic/reborn";
import {
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from "@floating-ui/react-dom-interactions";
import { useState } from "react";
import ReactDOM from "react-dom";
import { useAuth } from "@bornlogic/util-auth-mf";
import * as S from "./style";

type NavbarProps = React.HTMLAttributes<HTMLDivElement>;
const fullName = "Alex Nosse";

function Navbar(props: NavbarProps) {
  const { logout } = useAuth();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { x, y, reference, floating, strategy, context } = useFloating({
    open: isMenuOpen,
    onOpenChange: setIsMenuOpen,
    placement: "bottom",
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useDismiss(context),
    useRole(context, {
      role: "menu",
    }),
  ]);

  const menu =
    isMenuOpen &&
    ReactDOM.createPortal(
      <S.Menu
        ref={floating}
        style={{
          position: strategy,
          top: `calc(${y ?? 0}px + ${spacing.inset.xs})`,
          left: x ?? 0,
        }}
        {...getFloatingProps()}
      >
        <S.UserAvatarInMenu name={fullName} />

        <S.UserNameInMenu>{fullName}</S.UserNameInMenu>
        <S.UserEmailInMenu>alex.nosse@bornlogic.com</S.UserEmailInMenu>

        <S.LogoutButton onClick={logout}>Sair</S.LogoutButton>
      </S.Menu>,
      document.body
    );

  return (
    <S.NavbarWrapper {...props}>
      <Container>
        <Grid>
          <Column larger={12}>
            <S.NavbarNav>
              <Logo size="small" iconOnly={false} />

              <S.UserInfo>
                <S.UserAvatarButton
                  ref={reference}
                  onClick={() => setIsMenuOpen(true)}
                  {...getReferenceProps()}
                >
                  <S.UserAvatarInNav name={fullName} />
                </S.UserAvatarButton>

                <S.UserName>{fullName}</S.UserName>
              </S.UserInfo>
            </S.NavbarNav>
          </Column>
        </Grid>
      </Container>

      {menu}
    </S.NavbarWrapper>
  );
}

export default Navbar;
