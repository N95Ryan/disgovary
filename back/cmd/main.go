package main

import (
	"database/sql"
	"example/web-service-gin/pkg/router"
	"example/web-service-gin/pkg/user"
	"fmt"
	"net/http"
		_ "github.com/go-sql-driver/mysql"
	"github.com/gin-gonic/gin"
)

const dataSourceName = "root:@tcp(localhost:3306)/go-test"

func main() {
	// database connection
	db, err := sql.Open("mysql", dataSourceName)
	if err != nil {
		fmt.Println("Error opening database:", err)
		return
	}
	defer db.Close()

	err = db.Ping()
	if err != nil {
		fmt.Println("Error connecting to database:", err)
		return
	}
	fmt.Println("Connected to database!")

	// user service
	userService := user.NewUserService(db)

	r := gin.Default()
	    // CORS middleware
		r.Use(func(c gin.Context) {
			c.Writer.Header().Set("Access-Control-Allow-Origin", "")
			c.Writer.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
			c.Writer.Header().Set("Access-Control-Allow-Headers", "Origin, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")
			if c.Request.Method == "OPTIONS" {
				c.AbortWithStatus(http.StatusOK)
				return
			}
			c.Next()
		})
	
	router.SetupRouter(userService, r)

	// Start the HTTP server
	port := 8080
	fmt.Printf("Server is running on :%d...\n", port)
	http.ListenAndServe(fmt.Sprintf(":%d", port), r)
}
