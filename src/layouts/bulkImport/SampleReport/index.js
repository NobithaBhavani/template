// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";


// Data
// import authorsTableData from "layouts/tables/data/authorsTableData";
import SampleReport from "./SampleReport";

function Tables() {
  // const { columns, rows } = authorsTableData();
  const { columns, rows } = SampleReport();

  return (
    <DashboardLayout>
      
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
     

          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-2}
                py={1}
                px={1}
                variant="gradient"
                sx={{ background: '#1E90FF' }}
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                   VALIDATE DATA
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
