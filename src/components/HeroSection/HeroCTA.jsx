import { Stack } from "@mui/material";
import { CustomRedButton, CustomRedOutlinedButton } from "../ui/CustomButtons";

const HeroCTA = () => {
  const enquireNowHandler = () => {
    console.log("Enquire now");
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
