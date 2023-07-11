import { Grid } from "@mui/material";
import CardStore from "./CardStore";
import { storesData } from "./StoreData";


const DisplayStores = () => {
    return (<Grid container spacing={4} direction="column" alignItems="center" justifyContent="space-between">
        {storesData.map((store, idx) => <CardStore key={idx} location={store.location} name={store.name} imageUrl={store.image} idx={idx} description={store.description} />)}
    </Grid>);
}

export default DisplayStores;