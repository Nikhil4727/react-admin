import { Box,Typography,useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import {mockDataTeam} from "../../data/mockData";
import AdminPanelSettingOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import Header from "../../component/Header";
const Team=()=>{
    const theme=useTheme();
    const color=tokens(theme.palette.mode);

    const columns=[
        {field:"id",headerName:"ID"}
    ]
    return(
        <Box>
            <Header title="team" subtitle="Managing the team members"/>
            <Box>
                <DataGrid 
                    rows={mockDataTeam}
                    columns={columns}
                
                />
            </Box>
        </Box>
    )
}