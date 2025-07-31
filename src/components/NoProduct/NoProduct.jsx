import React from 'react';

const NoProduct = () => {
    return (
        <div>
            <div>
            <p className="text-md font-medium">No favorites yet</p>
            <p className="text-sm text-gray-500">
              Click the heart icon on any item <br /> to add it to your
              favorites
            </p>
            </div>
        </div>
    );
};

export default NoProduct;