import MarkdownEditor from "./components/MarkdownEditor.jsx";
function App() {
    const onContentChange = (markdown) => {
        console.log(markdown)
    }
  return (
   <>
        <MarkdownEditor onContentChange={onContentChange}></MarkdownEditor>
   </>
  )
}

export default App
