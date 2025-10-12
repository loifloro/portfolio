"use client";

import { useState, useEffect } from "react";
import { createClient } from "utils/supabase/client";

export default function useAuthentication() {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const { auth } = createClient();

    useEffect(() => {
        (async () => {
            setIsAuthenticated(!!(await auth.getSession()).data.session);
        })();
    }, []);

    return { isAuthenticated };
}
