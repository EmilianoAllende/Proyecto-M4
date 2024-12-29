"use client";

import AuthProtected from "@/components/AuthProtected/AuthProtected";

const DashboardPage = () => {
    return (
        <AuthProtected>
            <div className="mx-auto text-center w-fit">
                <div className="bg-secondaryColor bg-opacity-70">
                </div>

                <div className="mt-4 bg-secondaryColor bg-opacity-50">
                </div>
            </div>
        </AuthProtected>
    );
};

export default DashboardPage;