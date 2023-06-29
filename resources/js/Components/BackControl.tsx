import {IconButton} from "@mui/material";
import {ArrowBack} from "@mui/icons-material";

export const BackControl = () => {
  return (
    <div>
      <IconButton onClick={()=>window.history.back()}>
        <ArrowBack/>
      </IconButton>
    </div>
  )
}
