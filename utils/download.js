const fetchUrl = typeof window !== 'undefined' && window.location.hostname.includes('local')?'http://localhost:8000/':'https://api.myarth.in/' ;
// const fetchUrl = 'https://api.myarth.in/' ;

const download = async (endPoint, token, fileName='data.csv') => {
    try {
        const response = await fetch(`${fetchUrl}${endPoint}`, {
            headers: {  'Content-Type': 'application/json', 'Authorization' : 'Bearer ' + token }
        }) ;

        if (!response.ok) {
            throw new Error('Failed to download CSV');
        }

        // Get the blob of the CSV file from the response
        const blob = await response.blob();
        // Create a temporary link element for download
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', fileName);

        // Append the link to the body and simulate a click to trigger the download
        document.body.appendChild(link);
        link.click();

        // Clean up and remove the link element
        link.parentNode.removeChild(link);
        window.URL.revokeObjectURL(url);
    } catch (error) {
        console.error('Error downloading the CSV:', error);
    }
};

export { download } ;