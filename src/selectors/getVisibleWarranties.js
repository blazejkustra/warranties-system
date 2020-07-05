// Get visible warranties

const getVisibleWarranties = (warranties, {text, category}) => {
    return warranties.filter((warranty) => {
        const {number, item, model, serialNumber, duration, invoice, other} = warranty;
        const combinedText = (number + item + model + serialNumber + duration + invoice + other).toLowerCase();

        const textMatch = text.toLowerCase() ? combinedText.includes(text.toLowerCase()) : true;
        const categoryMatch = category !== 'all' ? category === warranty.category : true;

        return categoryMatch && textMatch;
    }).sort((a, b) => a.startDate < b.startDate ? 1 : -1);
};

export default getVisibleWarranties;