import React from 'react';
import Link from 'next/link';

function StudentInfo() {
    return (
        <div>
            <p>Daniel Durdey</p>
            <p>
                My GitHub repository:{' '}
                <Link href="https://github.com/DDurdey/cprg306-assignments" target="_blank" rel="noopener noreferrer">
                    https://github.com/DDurdey/cprg306-assignments
                </Link>
            </p>
        </div>
    );
}

export default StudentInfo;