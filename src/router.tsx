import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotesPage from "./pages/notesPage";
import StudentPage from "./pages/studentPage";
import NotFoundPage from "./pages/notFoundPage";
import SlideBar from "./components/global/slideBar";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <section className="flex flex-row w-full h-screen gap-x-6">
                <SlideBar />
                <Routes>
                    <Route path="/student" element={<StudentPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                    <Route path="/notes" element={<NotesPage />} />

                </Routes>
            </section>
        </BrowserRouter>
    );
}
export default AppRouter;