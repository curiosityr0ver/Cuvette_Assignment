import { Box } from "@chakra-ui/layout";
import Notebox from "../components/NoteBox";
import MyNotes from "../components/MyNotes";


const Notepage = () => {

    return (
        <div style={{ width: "100%" }}>
            <Box display='flex' justifyContent='space-between' w='100%' h={'100vh'}>
                <MyNotes />
                <Notebox />
            </Box>
        </div>
    );
};

export default Notepage;
