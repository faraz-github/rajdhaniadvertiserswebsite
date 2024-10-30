import { Stack } from "@mui/material";
import { CustomRedButton, CustomRedOutlinedButton } from "../ui/CustomButtons";

const HeroCTA = () => {
  const enquireNowHandler = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const adTodayHandler = () => {
    console.log("Ad Today");
  };
  return (
    <Stack
      direction={"row"}
      spacing={2}
      justifyContent={{ xs: "center", md: "left" }}
    >
      <CustomRedButton
        buttonTitle="Enquire Now"
        disableElevation
        onClickHandler={enquireNowHandler}
      />
      <CustomRedOutlinedButton
        buttonTitle="Ad Today"
        onClickHandler={adTodayHandler}
      />
    </Stack>
  );
};

export default HeroCTA;
