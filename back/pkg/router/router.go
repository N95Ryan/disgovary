package router

import (
	"example/web-service-gin/pkg/user"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/gin-contrib/cors"
	_ "github.com/go-sql-driver/mysql"
)

// SetupRouter configures the API routes
func SetupRouter(userService *user.UserService) *gin.Engine { //SetupRouter configures the API routes
	router := gin.Default()

	// CORS middleware
    router.Use(cors.New(cors.Config{
        AllowOrigins:     []string{"*"}, // Allow all origins
        AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
        AllowHeaders:     []string{"Origin", "Content-Type", "Content-Length"},
        AllowCredentials: true,
        MaxAge:           12 * time.Hour,
    }))

	// user-related API endpoints
	userRoutes := router.Group("/users")
	{
		userController := user.NewUserController(userService)
		userRoutes.POST("", userController.CreateUserHandler)
		userRoutes.GET("", userController.GetAllUsersHandler)
		userRoutes.GET("/:id", userController.GetUserHandler)
		userRoutes.DELETE("/:id", userController.DeleteUserHandler)
	}

	return router
}
