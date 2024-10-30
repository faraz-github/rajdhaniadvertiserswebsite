import { useState } from "react";
import { Stack } from "@mui/material";

import { CustomRedButton, CustomRedOutlinedButton } from "../ui/CustomButtons";

import AdNowModal from "../modals/AdNowModal";

const HeroCTA = () => {
  const [openAdNowModal, setOpenAdNowModal] = useState(false);

  const enquireNowHandler = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const adTodayHandler = () => {
    setOpenAdNowModal(true);
  };
  return (
    <>
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
      <AdNowModal open={openAdNowModal} setOpen={setOpenAdNowModal} />
    </>
  );
};

export default HeroCTA;
