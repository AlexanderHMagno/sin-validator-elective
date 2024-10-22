import SinRegisterForm from '@/components/sin/sin-register-form';

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      <div>
        <header className="text-center py-20">
          <h1 className="text-4xl font-bold mb-4">SIN Validator App</h1>
          <h1 className="text-lg text-gray-600">
            Validate SINs quickly and easily with our powerful tool.
          </h1>
        </header>

        <main className="flex flex-col items-center">
          <SinRegisterForm />
        </main>
      </div>

      <footer className="py-10 mt-auto">
        <p className="text-center text-gray-600">
          © 2024 Sin Validator App. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
