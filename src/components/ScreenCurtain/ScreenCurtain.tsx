import { IntroSection, ScreenContainer, ScreenContent } from "./styles";
import bgImage from '../../Assets/Images/kitchen/Bitmap.png'
import { HeaderText3, ParagraphText } from "../../styles/General/Typography";
import { PrimaryButton } from "../../styles/General/Button";
import { Nav } from "./Nav";

export const ScreenCurtain = () => {
    return (
        <ScreenContainer>
            <ScreenContent bg={bgImage}>
                <Nav/>
                <IntroSection>
                    <div>
                    <ParagraphText>DESIGN AND ORDER YOUR NEW KITCHEN ONLINE TODAY</ParagraphText>
                    <HeaderText3>Bespoke & made to measure handmade kitchen design</HeaderText3>
                    <PrimaryButton>ORDER NOW</PrimaryButton>
                    </div>
                </IntroSection>
            </ScreenContent>
        </ScreenContainer>
    )
}