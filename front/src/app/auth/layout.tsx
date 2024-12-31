export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
            <div className="mt-14 mx-auto w-11/12">
                <div className="flex flex-row items-center">
                    <div className="bg bg-red-800 w-1/2">
                        LADO IZQUIERDO
                    </div>

                    <div className="w-1/2 flex items-center justify-center">
                        {children}
                    </div>
                </div>
            </div>
    );
};