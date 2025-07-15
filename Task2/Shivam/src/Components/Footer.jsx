const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>NewsNow by Shivam</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#343a40',
    color: '#fff',
    padding: '10px 0',
    textAlign: 'center',
    marginTop: '30px',
    position: 'relative',
    bottom: 0,
    width: '100%',
  },
  text: {
    margin: 0,
    fontSize: '1rem',
  },
};

export default Footer;
