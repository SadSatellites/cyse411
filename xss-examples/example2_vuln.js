import DOMPurify from 'dompurify';
function MyComponent({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }} />;
}
