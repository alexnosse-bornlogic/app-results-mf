import {
  Avatar,
  spacing,
  color,
  TYPOGRAPHY_VARIANTS,
  Button,
  BUTTON_VARIANTS,
  Typography,
  shadows,
  border,
  AVATAR_SIZES,
} from "@bornlogic/reborn";
import styled from "styled-components";

export const NavbarWrapper = styled.div`
  background-color: ${color.neutralHigh.v100.color};
`;

export const NavbarNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${spacing.inset.md} ${spacing.inset.lg};
`;

export const UserAvatarButton = styled.button`
  appearance: none;
  border: 0;
  background-color: transparent;
  padding: 0;
`;

export const UserAvatarInNav = styled(Avatar)`
  cursor: pointer;
`;

export const UserName = styled(Typography).attrs({
  typography: TYPOGRAPHY_VARIANTS.paragraph2,
})``;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;

  ${UserAvatarButton} {
    margin-right: ${spacing.inset.xs};
  }
`;

export const Menu = styled.div`
  background-color: ${color.neutralHigh.v100.color};
  border-radius: ${border.radius.sm};
  padding: ${spacing.inset.md};
  max-width: 286px;
  width: 100%;
  z-index: 11;
  ${shadows.level2}
`;

export const UserAvatarInMenu = styled(Avatar).attrs({
  size: AVATAR_SIZES.large,
})`
  margin: 0 auto;
  margin-bottom: ${spacing.inset.md};
`;

export const UserNameInMenu = styled(Typography).attrs({
  typography: TYPOGRAPHY_VARIANTS.h6,
})`
  margin-bottom: ${spacing.inset.xs};
  text-align: center;
`;

export const UserEmailInMenu = styled(Typography).attrs({
  typography: TYPOGRAPHY_VARIANTS.paragraph3,
})`
  margin-bottom: ${spacing.inset.xs};
  color: ${color.neutralLow.v200.color};
  text-align: center;
`;

export const LogoutButton = styled(Button).attrs({
  variant: BUTTON_VARIANTS.stroke,
  fullWidth: true,
})``;
